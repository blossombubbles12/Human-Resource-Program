import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    
    // Extract form data
    const formData = {
      name: body.get('name'),
      email: body.get('email'),
      phone: body.get('phone'),
      program: body.get('program'),
      experience: body.get('experience'),
      startDate: body.get('startDate'),
      message: body.get('message'),
      newsletter: body.get('newsletter'),
      timestamp: new Date().toISOString(),
    };

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send email notification
    // 4. Add to CRM system
    
    console.log('Contact Form Submission:', formData);
    
    // For now, we'll just log and return success
    // In production, you'd integrate with your email service (SendGrid, etc.)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We will contact you within 24 hours.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error submitting your form. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Contact form endpoint - POST method required' },
    { status: 405 }
  );
}