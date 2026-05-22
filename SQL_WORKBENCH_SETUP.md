# SQL Workbench 准备清单（报名数据）

## 1) 安装与连接
1. 安装 MySQL Server 8.x（本机或云端）。
2. 打开 SQL Workbench，新建连接（Host/Port/User/Password）。
3. 测试连接成功后保存连接配置。

## 2) 建库建表
1. 在 SQL Workbench 打开 `sql-workbench-enrollments.sql`。
2. 把脚本里的 `your_schema_name` 改成公司要求的 schema 名称。
2. 执行整份 SQL 脚本（闪电按钮）。
3. 在 `Schemas` 中确认：
   - 数据库：你配置的公司 schema（例如 `company_enrolment`）
   - 数据表：`enrolment_submissions`

## 3) 快速验证
执行以下 SQL，确认结构可用：

```sql
USE your_schema_name;
SHOW TABLES;
DESCRIBE enrolment_submissions;
```

建议再插入一笔测试数据：

```sql
INSERT INTO enrolment_submissions (
  Programme,
  Stu_First_name,
  Stu_last_name,
  Stu_age,
  Stu_gender,
  school,
  Country_of_Residence,
  Par_fitst_name,
  Par_last_name,
  Par_email,
  Relationship_to_Student,
  number
) VALUES (
  'human-tech-summer-camp',
  'Test',
  'Student',
  17,
  'Female',
  'Harbour School',
  'Hong Kong',
  'Parent',
  'Tester',
  'parent.real@example.com',
  'Parent',
  '+85295550000'
);
```

## 4) 给前端/后端提供连接参数
按 `.env.example` 准备环境变量：
- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`（连接用 database）
- `DB_SCHEMA`（写入表所在 schema，通常与 `DB_NAME` 一致）
- `DB_ENROLMENT_TABLE`（默认 `enrolment_submissions`）
- `DB_CONNECTION_LIMIT`（可选）
- `DB_SSL`（公司库建议 `true`）
- `DB_SSL_REJECT_UNAUTHORIZED`（建议 `true`）
- `DB_SSL_CA_PATH` 或 `DB_SSL_CA_BASE64`（公司提供 CA 时使用）

## 5) 你需要特别注意
- 目前本地开发 (`next dev`) 可直接使用 `app/api/enrolments/route.ts` 写入 MySQL。
- 生产环境若保持静态导出（`output: 'export'`），就不能用 Next.js API Route，需改为独立后端服务。
- 生产环境请为数据库账号设置最小权限（仅目标库读写，不给全局管理权限）。
- 不要把真实账号密码放进 `.env.example` 或 Git，生产环境请改用部署平台 Secret。
