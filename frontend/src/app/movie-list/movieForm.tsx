'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const genres = ['DRAMA', 'THRILLER', 'ACTION', 'ROMANTIC', 'COMEDY', 'HISTORICAL', 'ANIMATION', 'SPORTS', 'SOCIAL', 'WAR'];
const languages = ['HINDI', 'ENGLISH', 'TELUGU', 'TAMIL', 'MARATHI', 'PUNJABI', 'KANNADA'];

type FormData = {
  movieName: string;
  duration: number;
  rating: number;
  releaseDate: string;
  genre: string;
  language: string;
};

interface MovieFormProps {
  onMovieAdded: () => void;
}

export function MovieForm({ onMovieAdded }: MovieFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    defaultValues: {
      movieName: '',
      duration: 0,
      rating: 0,
      releaseDate: '',
      genre: 'DRAMA',
      language: 'HINDI',
    },
  });

  async function onSubmit(data: FormData) {
    // Manual validation
    if (!data.movieName) {
      toast({
        title: 'Error',
        description: 'Movie name is required.',
        variant: 'destructive',
      });
      return;
    }
    if (data.duration < 1) {
      toast({
        title: 'Error',
        description: 'Duration must be at least 1 minute.',
        variant: 'destructive',
      });
      return;
    }
    if (data.rating < 0 || data.rating > 10) {
      toast({
        title: 'Error',
        description: 'Rating must be between 0 and 10.',
        variant: 'destructive',
      });
      return;
    }
    if (!data.releaseDate) {
      toast({
        title: 'Error',
        description: 'Release date is required.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8080/movie/addNew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add movie');
      }

      toast({
        title: 'Success',
        description: 'Movie added successfully!',
      });
      form.reset();
      onMovieAdded();
    } catch (error) {
      console.error('Error adding movie:', error);
      toast({
        title: 'Error',
        description: 'Failed to add movie. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="movieName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Movie Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter movie name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (minutes)</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" {...field} onChange={(e) => field.onChange(parseFloat(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="releaseDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Release Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre.charAt(0) + genre.slice(1).toLowerCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language.charAt(0) + language.slice(1).toLowerCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Movie'}
        </Button>
      </form>
    </Form>
  );
}
