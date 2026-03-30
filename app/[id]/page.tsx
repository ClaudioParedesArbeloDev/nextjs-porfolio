// app/[id]/page.tsx
import {prisma} from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import HtmlContent from '@/components/HtmlContent';

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = await params;
  const courseId = parseInt(id);

  if (isNaN(courseId)) {
    notFound();
  }

  const course = await prisma.courses.findUnique({
    where: { id: courseId },
  });

  if (!course) {
    notFound();
  }

  const price = course.price ? Number(course.price) : 0;

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
       
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors"
        >
          <i className="fa-solid fa-left-long"></i> Volver a todos los cursos
        </Link>

        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-10 shadow-lg">
          
          <p className="uppercase tracking-widest text-sm text-text-secondary mb-3">
            {course.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {course.name}
          </h1>

          <div className="text-4xl font-bold text-primary mb-10">
            {price === 0 ? "Gratis" : `$${price}`}
          </div>

          {course.description && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6">Descripción del curso</h2>
              <HtmlContent html={course.description} />
            </div>

          
          )}
        </div>
      </div>
    </div>
  );
}