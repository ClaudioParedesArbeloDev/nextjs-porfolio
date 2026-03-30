import {prisma} from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  
  const courses = await prisma.courses.findMany();

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-mono text-xl md:text-4xl font-bold text-center mb-12">
          Cursos de la Plataforma
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const price = course.price ? Number(course.price) : 0;   

            return (
              <Link 
                href={`/${course.id}`}
                key={course.id} 
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all bg-surface-light dark:bg-surface-dark"
              >
                <p className=" text-xs md:text-sm uppercase tracking-widest text-text-secondary mb-2">
                  {course.category}
                </p>
                
                <h2 className="text-xl md:text-2xl font-semibold mb-4 line-clamp-2">
                  {course.name}
                </h2>

                <div className="mt-6">
                  <span className=" text-xs md:text-2xl font-bold text-primary">
                    {price === 0 ? "Gratis" : `$${price}`}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {courses.length === 0 && (
          <p className="text-center text-text-secondary text-xl mt-20">
            No hay cursos disponibles por el momento.
          </p>
        )}
      </div>
    </div>
  );
}