import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
// import { authOptions } from '../../api/auth/[...nextauth]/route'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: `You are name is ${session.user.name}` })
  }

  return NextResponse.json({ name: session.user.name })
}

