import connectToDB from '@/server/config/connect.db';
import Users, { IUser } from '@/server/model/users.model';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Connect to the database
    await connectToDB();
    console.log('Database connected successfully');

    // Parse request body
    const { email, name, userUid } = await req.json();
    console.log(userUid)
    console.log('Request Body:', { email, name, userUid });

    // Validate input
    if (!email || !name || !userUid) {
      return NextResponse.json(
        { error: 'Missing required fields: email, name, or userUid' },
        { status: 400 }
      );
    }

    // Check if user exists
    let user = (await Users.findOne({ userUid })) as IUser | null;

    if (!user) {
      // Create a new user if it doesn't exist
      user = (await Users.create({ email, name, userUid })) as IUser;
      console.log('New user created:', user);
    } else {
      console.log('User already exists:', user);
    }

    // Return user data in the response
    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    console.error('Error in user API:', error);

    // Handle specific errors if applicable
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 422 }
      );
    }

    // Catch-all for internal server errors
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
