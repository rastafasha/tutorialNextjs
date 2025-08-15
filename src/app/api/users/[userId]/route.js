export async function GET(request, { params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json();
    return NextResponse.json(data);
}

export function POST(request, { params }) {
    const { userId } = params;
    return NextResponse.json({ message: `Creando datos para el usuario ${userId}` });
}

export function PUT(request, { params }) {
    const { userId } = params;
    return NextResponse.json({ message: `Actualizando datos del usuario ${userId}` });
}

export function DELETE(request, { params }) {
    const { userId } = params;
    return NextResponse.json({ message: `Borrando datos del usuario ${userId}` });
}