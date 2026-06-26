const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const config = {
    host: 'localhost',
    user: 'root',
    password: '12305',
    database: 'fire_patrol_system'
};

async function initAdmin() {
    const pool = mysql.createPool(config);
    try {
        const connection = await pool.getConnection();

        const username = 'admin';
        const password = '123456';
        const real_name = '系统管理员';
        const role = 1;
        const status = 1;

        const hashedPassword = await bcrypt.hash(password, 10);

        await connection.execute(
            'INSERT INTO sys_user (username, password, real_name, role, status, is_deleted) VALUES (?, ?, ?, ?, ?, 0)',
            [username, hashedPassword, real_name, role, status]
        );

        console.log('✅ 管理员用户初始化成功');
        console.log('账号:', username);
        console.log('密码:', password);
        console.log('存储的哈希:', hashedPassword);

        connection.release();
    } catch (err) {
        console.error('❌ 初始化失败:', err);
    } finally {
        await pool.end();
    }
}

initAdmin();