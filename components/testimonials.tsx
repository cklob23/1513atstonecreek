import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer",
      date: "August 2026",
      text: "Wonderful venue with talented and helpful staff! Haley and Gina are great to work with throughout the planning process. They are kind to the bride and parents. The coordinator on the wedding day is available and helpful with all the details too. All inclusive venue is the way to go!",
      rating: 5,
    },
    {
      name: "Larry",
      date: "June 2026",
      text: "The entire staff at 1513 at Stone Creek was incredible. They were wonderful to our entire group the day of my daughter's wedding. The venue itself is incredible. We could not have shared a more perfect day and the staff is a big reason why. Glad to recommend this venue and staff to anyone interested.",
      rating: 5,
    },
    {
      name: "Christina",
      date: "June 2026",
      text: "You two!!!! I don't even know where to start! I have worked in the wedding industry for 16 years and I have never worked with a venue that literally took care of everything and anticipated every need! You have no idea what a blessing you have been to this momma!!! I love you both and appreciate you more than you will ever know. You both made my baby girl's day EVERYTHING she always dreamed of. You both are such blessings! And your staff was amazing as well!!!! Thank you again for everything. You will both always have a place in my heart.",
      rating: 5,
    },
    {
      name: "April",
      date: "April 2026",
      text: "Attended my nephews wedding. Beautiful.",
      rating: 5,
    },
    {
      name: "Lacey",
      date: "August 2025",
      text: "We hosted a wedding shower here in April. It was an amazing and beautiful experience. The new owners are attentive, efficient, accommodating, and kind! They are working very hard and diligently to bring this beautiful venue back up to its full potential. Check out 1513 at Stone Creek.",
      rating: 5,
    },
    {
      name: "Rebecca",
      date: "October 2025",
      text: "Amazing venue! Loved the space.",
      rating: 5,
    },
    {
      name: "Kerry",
      date: "September 2025",
      text: "Wedding turned out beautiful. Food was great. Very pleased with everything!",
      rating: 5,
    },
    {
      name: "Michael",
      date: "June 2025",
      text: "Awesome spot for that special occasion!",
      rating: 5,
    },
    {
      name: "Aaron",
      date: "November 2024",
      text: "Went here for a wedding. Looks great!",
      rating: 5,
    },
    {
      name: "Ariel",
      date: "October 2025",
      text: "I had my engagement party here in September! Gina and Haley were the best to work with and have made the place beautiful! We used the outdoor area and they had it decorated with lights and flowers! They had already set out tables with the table cloths! Highly recommend for any event and/or wedding!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">What Couples Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the couples who made their dreams come true at our venue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border-border">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-muted-foreground text-muted-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
