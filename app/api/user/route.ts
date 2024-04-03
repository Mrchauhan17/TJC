import pool from '../../../db/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    
    try {
        const client = await pool.connect();
        console.log("tinku")
        console.log("dgvgvgtvgtvg7777777777777")
        const result = await client.query('SELECT * from item_details');
        const results = { 'results': (result) ? result.rows : null };
        client.release(); // Release the client connection here
        return NextResponse.json(results);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}