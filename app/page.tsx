import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');

  const data = JSON.parse(file);

  return (
    <div className='bg-slate-800 p-4'>
      <div className='flex flex-row space-x-4 items-center'>
        <span className="text-4xl">Homework Manager</span>
        <span className="py-1 px-3 bg-blue-500 rounded-xl text-lg">{data.version}</span>
      </div>
    </div>
  );
}
