import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { getMySqlPool } from '@/lib/mysql';
import { getEnrolmentInsertSql, toEnrolmentInsertRow, toEnrolmentInsertValues } from '@/lib/enrolments';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const requestId = `enrol-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  try {
    const payload = await request.json();
    console.log(`[${requestId}] Received enrolment payload:`, payload);

    const row = toEnrolmentInsertRow(payload);
    const values = toEnrolmentInsertValues(row);
    console.log(`[${requestId}] Normalized row:`, row);

    const pool = getMySqlPool();
    const insertSql = getEnrolmentInsertSql();
    await pool.execute(insertSql, values);
    console.log(`[${requestId}] Insert successful.`);

    return NextResponse.json({
      ok: true,
      message: 'Enrolment submitted successfully.',
    });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error(`[${requestId}] Validation failed:`, error.flatten());
      return NextResponse.json(
        {
          ok: false,
          message: 'Invalid enrolment payload.',
          details: error.flatten(),
        },
        { status: 400 },
      );
    }

    console.error(`[${requestId}] Enrolment submit failed:`, error);
    return NextResponse.json(
      {
        ok: false,
        message: 'Unable to submit enrolment right now.',
      },
      { status: 500 },
    );
  }
}
