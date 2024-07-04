import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

async function getDbUpdate(data) {
  const conn = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "raditms",
    port: 3366
  });
  const [rows, fields] = await conn.execute('SELECT * FROM sign WHERE username = ?', [data.username]);
  return rows;
}

export async function POST(req) {
  const data = await req.json();
  const db = await getDbUpdate(data);
  console.log(data, db[0].password);
  if (db.length > 0 && db[0].password === data.password) {
    return NextResponse.json({
      flag: 0,
      status: 'Authenticated',
      body: "Successful Authorization"
    });
  }
  return NextResponse.json({
    flag: 1,
    status: 'Failed to Authenticate',
    body: "Authorization Failed"
  });
}
