import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  
  try {
    // In a real implementation, you would:
    // 1. Fetch the program details from your database
    // 2. Generate or retrieve the actual PDF brochure
    // 3. Return the PDF file as a response
    
    // For now, we'll create a simple text response that simulates a PDF download
    const brochureContent = `
PROGRAM BROCHURE - ${slug.toUpperCase().replace(/-/g, ' ')}

GLOBAL INSTITUTE OF HUMAN CAPITAL AND RESOURCES

Program Highlights:
• Industry-leading curriculum
• Expert instructors
• Flexible scheduling 
• Career support services
• Global certification
• Alumni network access

Key Features:
• Hands-on projects
• Real-world case studies
• Interactive learning
• Personalized mentorship
• Job placement assistance

Contact us today to learn more about this program and start your journey!

Phone: 1-800-GIHCR-ED
Email: admissions@gihcr.edu
Website: www.gihcr.edu
    `;

    // Create a response with appropriate headers for file download
    const response = new NextResponse(brochureContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${slug}-brochure.pdf"`,
        'Cache-Control': 'no-cache',
      },
    });

    return response;
  } catch (error) {
    console.error('Error generating brochure:', error);
    return NextResponse.json(
      { error: 'Failed to generate brochure' },
      { status: 500 }
    );
  }
}