import * as fs from 'fs';

export async function GET() {
    try {
        const filePath = await fs.promises.readdir('./src/app/data/');
        const allblogs = [];

        for (let index = 0; index < filePath.length; index++) {
            const item = filePath[index];
            console.log(item);

            try {
                const myfile = await fs.promises.readFile(`src/app/data/data${index}.json`, 'utf-8');
                allblogs.push(JSON.parse(myfile));
            } catch (readError) {
                console.error(`Error reading file ${item}:`, readError);
                // Continue processing other files even if one fails
                continue;
            }
        }

        return new Response(JSON.stringify(allblogs), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error("Error reading directory:", error);
        return new Response(
            JSON.stringify({ message: "Internal Server Error" }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
