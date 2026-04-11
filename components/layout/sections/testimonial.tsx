"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    name: "Alex Chen",
    userName: "Software Developer",
    comment:
      "Finally found an honest comparison! The Value Index showed me which apps actually give unlimited features vs those with hidden coin systems. Saved me $50/month.",
    rating: 5.0,
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    name: "Sarah Martinez",
    userName: "Digital Artist",
    comment:
      "The 'Hidden Costs' section was eye-opening. I switched from a platform that looked cheap but ended up costing triple with credits.",
    rating: 4.8,
  },

  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    name: "Mike Johnson",
    userName: "Marketing Manager",
    comment:
      "Love how they test with real accounts and show actual limits. No more guessing if 'unlimited' really means unlimited.",
    rating: 4.9,
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    name: "Emma Wilson",
    userName: "Content Creator",
    comment:
      "The Value Index helped me find the best platform for video generation without paying per clip. Exactly what I needed!",
    rating: 5.0,
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    name: "David Park",
    userName: "Tech Entrepreneur",
    comment:
      "Transparent pricing breakdowns and real usage testing. This is what AI companion reviews should be - no marketing fluff.",
    rating: 5.0,
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    name: "Lisa Thompson",
    userName: "UX Designer",
    comment:
      "The methodology section convinced me these rankings are legit. geometric mean approach prevents gaming the system.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Real Users Share Their Experience
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                      />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
