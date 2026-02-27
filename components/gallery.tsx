"use client"

import { useState, useCallback } from "react"

const images = [
 // { src: "/1513-photo-111.jpg", alt: "1513 Photo 111" },
 // { src: "/1513-photo-117.jpg", alt: "1513 Photo 117" },
 // { src: "/1513-photo-127.jpg", alt: "1513 Photo 127" },
 // { src: "/1513-photo-128.jpg", alt: "1513 Photo 128" },
 // { src: "/1513-photo-129.jpg", alt: "1513 Photo 129" },
 // { src: "/1513-photo-137.jpg", alt: "1513 Photo 137" },
 // { src: "/1513-photo-138.jpg", alt: "1513 Photo 138" },
 // { src: "/1513-photo-139.jpg", alt: "1513 Photo 139" },
 // { src: "/1513-photo-144.jpg", alt: "1513 Photo 144" },
 // { src: "/1513-photo-146.jpg", alt: "1513 Photo 146" },
 // { src: "/1513-photo-147.jpg", alt: "1513 Photo 147" },
 // { src: "/1513-photo-153.jpg", alt: "1513 Photo 153" },
 // { src: "/1513-photo-158.jpg", alt: "1513 Photo 158" },
 // { src: "/1513-photo-161.jpg", alt: "1513 Photo 161" },
 // { src: "/1513-photo-162.jpg", alt: "1513 Photo 162" },
 // { src: "/1513-photo-164.jpg", alt: "1513 Photo 164" },
  //{ src: "/1513image23.jpg", alt: "1513 Photo 47" }, // 26
  // { src: "/1513-photo-81.jpg", alt: "1513 Photo 81" }, // 66
  // { src: "/1513-photo-77.jpg", alt: "1513 Photo 77" }, // 82
 // { src: "/1513-venue9.jpg", alt: "Gardens" }, // 110
  { src: "/the-venue2.jpg", alt: "Ceremony Space" },  // 111
  { src: "/1513image11.jpg", alt: "1513 Photo 34" }, // 14
  { src: "/1513-photo-155.jpg", alt: "1513 Photo 155" },
  { src: "/1513-photo-98.jpg", alt: "1513 Photo 98" }, // 9
  { src: "/1513-photo-97.jpg", alt: "1513 Photo 97" }, // 67
  { src: "/1513-moment43.jpg", alt: "Gardens" }, // 44
  { src: "/1513-photo-131.jpg", alt: "1513 Photo 131" },
  { src: "/1513-photo-76.jpg", alt: "1513 Photo 76" }, // 80
  { src: "/1513image21.jpg", alt: "1513 Photo 45" }, // 109
  { src: "/1513image35.jpg", alt: "1513 Photo 60" }, // 94
  { src: "/CagleSP-13.jpg", alt: "1513 Photo 4" }, // 97
  { src: "/1513-photo-85.jpg", alt: "1513 Photo 85" }, // 73
  { src: "/CagleSP-17.jpg", alt: "1513 Photo 6" }, // 33
  { src: "/1513-photo-118.jpg", alt: "1513 Photo 118" },
  { src: "/1513-photo-125.jpg", alt: "1513 Photo 125" },
  { src: "/1513image38.jpg", alt: "1513 Photo 63" }, // 70
  { src: "/1513-photo-95.jpg", alt: "1513 Photo 95" }, // 40
  { src: "/1513-moment33.jpg", alt: "Gardens" }, // 12
  { src: "/1513-photo-149.jpg", alt: "1513 Photo 149" },
  { src: "/1513-photo-99.jpg", alt: "1513 Photo 99" }, // 36
  { src: "/1513image19.jpg", alt: "1513 Photo 42" }, // 68
  { src: "/1513-dining2.jpg", alt: "Gardens" }, // 31
  { src: "/1513-moment37.jpg", alt: "Table Settings" }, // 19
  { src: "/1513-photo-151.jpg", alt: "1513 Photo 151" },
  { src: "/1513-dining3.jpg", alt: "Ceremony Space" }, // 27
  { src: "/1513-suite2.JPG", alt: "Reception Hall" }, // 28
  { src: "/1513-moment4.jpg", alt: "Couple Portrait" }, // 65
  { src: "/1513-photo-80.jpg", alt: "1513 Photo 80" }, // 11
  { src: "/1513-photo-150.jpg", alt: "1513 Photo 150" },
  { src: "/CagleSP-45.jpg", alt: "1513 Photo 24" }, // 48
  { src: "/1513-photo-79.jpg", alt: "1513 Photo 79" }, // 107
  { src: "/1513-moment8.jpg", alt: "Reception Hall" }, // 104
  { src: "/1513-photo-126.jpg", alt: "1513 Photo 126" },
  { src: "/1513-photo-87.jpg", alt: "1513 Photo 87" }, // 17
  { src: "/1513image24.jpg", alt: "1513 Photo 48" }, // 42
  { src: "/1513-photo-122.jpg", alt: "1513 Photo 122" },
  { src: "/1513-venue23.jpg", alt: "Gardens" }, // 47
  { src: "/the-venue17.jpg", alt: "Couple Portrait" }, // 79
  { src: "/1513-photo-82.jpg", alt: "1513 Photo 82" }, // 75
  { src: "/1513-photo-154.jpg", alt: "1513 Photo 154" },
  { src: "/1513-photo-104.jpg", alt: "1513 Photo 104" },
  { src: "/1513-photo-88.jpg", alt: "1513 Photo 88" }, // 56
  { src: "/1513-photo-124.jpg", alt: "1513 Photo 124" },
  { src: "/1513-photo-115.jpg", alt: "1513 Photo 115" },
  { src: "/CagleSP-36.jpg", alt: "1513 Photo 16" }, // 76
  { src: "/1513image40.jpg", alt: "1513 Photo 66" }, // 87
  { src: "/1513-photo-106.jpg", alt: "1513 Photo 106" },
  { src: "/1513-photo-91.jpg", alt: "1513 Photo 91" }, // 101
  { src: "/1513-photo-83.jpg", alt: "1513 Photo 83" }, // 49
  { src: "/1513-photo-92.jpg", alt: "1513 Photo 92" }, // 62
  { src: "/1513-photo-103.jpg", alt: "1513 Photo 103" },
  { src: "/1513image45.jpg", alt: "1513 Photo 70" }, // 77
  { src: "/1513-venue25.jpg", alt: "Sunset Views" }, // 41
  { src: "/1513-photo-141.jpg", alt: "1513 Photo 141" },
  { src: "/1513image17.jpg", alt: "1513 Photo 40" }, // 46
  { src: "/CagleSP-38.jpg", alt: "1513 Photo 18" }, // 57
  { src: "/1513image5.jpg", alt: "1513 Photo 71" }, // 81
  { src: "/1513-moment42.jpg", alt: "Gardens" }, // 39
  { src: "/1513image7.jpg", alt: "1513 Photo 73" }, // 71
  { src: "/1513-photo-142.jpg", alt: "1513 Photo 142" },
  { src: "/1513-photo-134.jpg", alt: "1513 Photo 134" },
  { src: "/1513-dining8.jpg", alt: "Gardens" }, // 98
  { src: "/1513image22.jpg", alt: "1513 Photo 46" }, // 50
  { src: "/1513-photo-132.jpg", alt: "1513 Photo 132" },
  { src: "/1513image32.jpg", alt: "1513 Photo 57" }, // 84
  { src: "/1513-photo-152.jpg", alt: "1513 Photo 152" },
  { src: "/1513-suite1.JPG", alt: "Reception Hall" }, // 64
  { src: "/1513-photo-102.jpg", alt: "1513 Photo 102" }, // 93
  { src: "/1513-photo-86.jpg", alt: "1513 Photo 86" }, // 32
  { src: "/1513-photo-163.jpg", alt: "1513 Photo 163" },
  { src: "/1513image6.jpg", alt: "1513 Photo 72" }, // 86
  { src: "/1513-photo-105.jpg", alt: "1513 Photo 105" },
  { src: "/1513-photo-116.jpg", alt: "1513 Photo 116" },
  { src: "/1513image8.jpg", alt: "1513 Photo 74" }, // 99
  { src: "/the-venue19.jpg", alt: "Ceremony Space" }, // 15
  { src: "/1513-photo-148.jpg", alt: "1513 Photo 148" },
  { src: "/CagleSP-6.jpg", alt: "1513 Photo 30" }, // 59
  { src: "/the-dining2.jpg", alt: "Reception Hall" }, // 35
  { src: "/1513image10.jpg", alt: "1513 Photo 33" }, // 85
  { src: "/1513image25.jpg", alt: "1513 Photo 49" }, // 52
  { src: "/1513-photo-112.jpg", alt: "1513 Photo 112" },
  { src: "/1513image33.jpg", alt: "1513 Photo 58" }, // 96
  { src: "/1513-photo-113.jpg", alt: "1513 Photo 113" },
  { src: "/1513-photo-136.jpg", alt: "1513 Photo 136" },
  { src: "/1513-moment30.jpg", alt: "Sunset Views" }, // 74
  { src: "/1513-photo-123.jpg", alt: "1513 Photo 123" },
  { src: "/1513image42.jpg", alt: "1513 Photo 68" }, // 29
  { src: "/the-venue26.jpg", alt: "Table Settings" }, // 103
  { src: "/1513-photo-94.jpg", alt: "1513 Photo 94" }, // 63
  { src: "/the-dining1.jpg", alt: "Gardens" }, // 55
  { src: "/1513-photo-145.jpg", alt: "1513 Photo 145" },
  { src: "/1513-photo-143.jpg", alt: "1513 Photo 143" },
  { src: "/1513image31.jpg", alt: "1513 Photo 56" }, // 4
  { src: "/1513-dining7.jpg", alt: "Gardens" }, // 58
  { src: "/1513-photo-100.jpg", alt: "1513 Photo 100" },  // 5
  { src: "/1513image14.jpg", alt: "1513 Photo 37" }, // 83
  { src: "/1513-photo-159.jpg", alt: "1513 Photo 159" },
  { src: "/1513-photo-93.jpg", alt: "1513 Photo 93" }, // 91
  { src: "/1513-moment11.jpg", alt: "Reception Hall" }, // 30
  { src: "/1513image39.jpg", alt: "1513 Photo 64" }, // 102
  { src: "/1513-moment2.jpg", alt: "Couple Portrait" }, // 88
  { src: "/1513-photo-130.jpg", alt: "1513 Photo 130" },
  { src: "/1513-photo-156.jpg", alt: "1513 Photo 156" },
  { src: "/CagleSP-49.jpg", alt: "1513 Photo 28" }, // 34
  { src: "/1513image2.jpg", alt: "1513 Photo 43" }, // 78
  { src: "/1513-spaces1.jpg", alt: "Table Settings" }, // 18
  { src: "/1513image27.jpg", alt: "1513 Photo 51" }, // 3
  { src: "/the-venue18.jpg", alt: "Couple Portrait" }, // 2
  { src: "/1513image12.jpg", alt: "1513 Photo 35" }, // 106
  { src: "/CagleSP-24.jpg", alt: "1513 Photo 9" }, // 1
  { src: "/1513image13.jpg", alt: "1513 Photo 36" }, // 90
  { src: "/1513-moment20.jpg", alt: "Table Settings" }, // 20
  { src: "/CagleSP-30.jpg", alt: "1513 Photo 14" }, // 16
  { src: "/1513image30.jpg", alt: "1513 Photo 55" }, // 13
  { src: "/1513image9.jpg", alt: "1513 Photo 75" }, // 25
  { src: "/1513-moment18.jpg", alt: "Gardens" }, // 100
  { src: "/1513image26.jpg", alt: "1513 Photo 50" }, // 92
  { src: "/1513image28.jpg", alt: "1513 Photo 52" }, // 23
  { src: "/1513-venue7.jpg", alt: "Sunset Views" }, // 24
  { src: "/1513-photo-110.jpg", alt: "1513 Photo 110" },
  { src: "/1513-photo-107.jpg", alt: "1513 Photo 107" },
  { src: "/the-moment12.jpg", alt: "Ceremony Space" }, // 60
  { src: "/the-moment13.jpg", alt: "Reception Hall" }, // 53
  { src: "/1513-photo-160.jpg", alt: "1513 Photo 160" },
  { src: "/1513image20.jpg", alt: "1513 Photo 44" }, // 89
  { src: "/1513-moment41.jpg", alt: "Sunset Views" }, // 7
  { src: "/1513image1.jpg", alt: "1513 Photo 32" }, // 105
  { src: "/1513-photo-133.jpg", alt: "1513 Photo 133" },
  { src: "/1513-photo-109.jpg", alt: "1513 Photo 109" },
  { src: "/1513-photo-114.jpg", alt: "1513 Photo 114" },
  { src: "/CagleSP-2.jpg", alt: "1513 Photo 7" }, // 43
  { src: "/1513-photo-121.jpg", alt: "1513 Photo 121" },
  { src: "/1513-moment44.jpg", alt: "Sunset Views" }, // 38
  { src: "/1513-photo-101.jpg", alt: "1513 Photo 101" }, // 21
  { src: "/1513-photo-140.jpg", alt: "1513 Photo 140" },
  { src: "/1513image36.jpg", alt: "1513 Photo 61" }, // 22
  { src: "/1513-photo-120.jpg", alt: "1513 Photo 120" },
  { src: "/1513image29.jpg", alt: "1513 Photo 53" }, // 61
  { src: "/1513-photo-78.jpg", alt: "1513 Photo 78" }, // 10
  { src: "/1513image41.jpg", alt: "1513 Photo 67" }, // 45
  { src: "/CagleSP-56.jpg", alt: "1513 Photo 29" }, // 6
  { src: "/1513-photo-157.jpg", alt: "1513 Photo 157" },
  { src: "/CagleSP-21.jpg", alt: "1513 Photo 8" }, // 54
  { src: "/1513image34.jpg", alt: "1513 Photo 59" }, // 8
  { src: "/CagleSP-12.jpg", alt: "1513 Photo 3" }, // 108
  { src: "/1513-photo-108.jpg", alt: "1513 Photo 108" },
  { src: "/1513image4.jpg", alt: "1513 Photo 65" }, // 95
  { src: "/1513-moment21.jpg", alt: "Sunset Views" }, // 72
  { src: "/1513-photo-89.jpg", alt: "1513 Photo 89" }, // 69
  { src: "/CagleSP-25.jpg", alt: "1513 Photo 10" }, // 51
  { src: "/1513-photo-119.jpg", alt: "1513 Photo 119" },
  { src: "/1513-photo-90.jpg", alt: "1513 Photo 90" }, // 37
  { src: "/1513-photo-135.jpg", alt: "1513 Photo 135" }]

function GalleryImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
      {/* Diagonal shadow sweep placeholder */}
      <div
        className={`absolute inset-0 gallery-placeholder ${loaded ? "gallery-sweep-exit" : "gallery-shadow-sweep"
          }`}
        style={{ animationDelay: loaded ? "0ms" : `${index * 200}ms` }}
      />

      {/* Actual image */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${loaded ? "gallery-photo-reveal" : "opacity-0"
          }`}
        style={{ animationDelay: `${index * 150}ms` }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-transparent group-hover:bg-venue-hover-overlay transition-colors duration-300" />

      {/* Zoom on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </div>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our stunning venue through the eyes of couples who celebrated their special day with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}



