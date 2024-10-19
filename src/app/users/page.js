import Link from "next/link";

export default function Users() {

    const users = [
        {
            name: "John",
            lastname: "Doe",
            age: 30,
            description: "A software engineer from California.",
            id: 1
        },
        {
            name: "Jane",
            lastname: "Smith",
            age: 25,
            description: "A graphic designer from New York.",
            id: 2
        },
        {
            name: "Michael",
            lastname: "Johnson",
            age: 35,
            description: "A project manager from Texas.",
            id: 3
        },
        {
            name: "Emily",
            lastname: "Davis",
            age: 28,
            description: "A marketing specialist from Florida.",
            id: 4
        },
        {
            name: "David",
            lastname: "Brown",
            age: 40,
            description: "A data analyst from Illinois.",
            id: 5
        }
    ]

    return (
        <div className="flex flex-col w-screen justify-center bg-slate-300 h-screen text-zinc-800">
        <h1>Users</h1>

        {
            users.map((user) => (
                <div key={user.id} className="m-4 p-4 bg-slate-400 rounded-lg w-1/4">
                    <Link href={`/users/${user.id}?name=${user.name}&lastname=${user.lastname}&age=${user.age}&description=${user.description}`}>
                    {user.lastname}, {user.name} </Link>
                  
                </div>
            ))
        }

        </div>
    );
}