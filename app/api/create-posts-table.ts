import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		await sql`
        CREATE TABLE posts (
            id serial PRIMARY KEY,
            title varchar(100),
            content text
        )
        `;
		res.status(200).send('Table created');
	} catch (error) {
		res.status(500).send(error);
	}
}
