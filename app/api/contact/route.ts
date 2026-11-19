import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, propertyRef, propertyTitle } = data;

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Por favor, introduce tu nombre completo.' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Por favor, introduce un correo electrónico válido.' },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 6) {
      return NextResponse.json(
        { error: 'Por favor, introduce un número de teléfono de contacto.' },
        { status: 400 }
      );
    }

    // Success response: in production this logs and notifies the agency
    console.log('[LEAD RECEIVED - TEMPO FAMILY REAL ESTATE]', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      propertyRef: propertyRef || 'Consulta General',
      propertyTitle: propertyTitle || 'General',
      message: message || ''
    });

    return NextResponse.json({
      success: true,
      message: '¡Gracias por contactar con Tempo Family Real Estate! Hemos recibido su consulta y nos pondremos en contacto con usted a la mayor brevedad.',
      leadData: {
        name,
        propertyRef: propertyRef || null
      }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Ha ocurrido un error al procesar su solicitud. Por favor, inténtelo de nuevo o llámenos directamente.' },
      { status: 500 }
    );
  }
}
