import Image from "next/image";

export default function DogGallery({dogImages}){
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            {
                dogImages.map((image) => (
                    <div key={image} className="min-w-[240px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] rounded-lg shadow-lg dark:shadow-gray-700/50 relative" style={{ minHeight: '300px' }}>
                        <Image 
                        src={image}
                        alt="Dog"
                        fill
                        className="rounded-lg"
                        style={{objectFit: 'cover'}}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024) 50vw, 25vw"
                        />
                    </div>
                ))
            }
        </div>
    )
}