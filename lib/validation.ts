import { z } from "zod";

// Contact Form Validation Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be at most 100 characters"),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be at most 100 characters")
    .regex(/^[a-zA-Z\s]*$/, "Subject can only contain letters and spaces"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

// Utility function to validate contact form data
export function validateContactForm(data: unknown) {
  try {
    return {
      success: true,
      data: contactFormSchema.parse(data),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      return {
        success: false,
        errors: fieldErrors,
      };
    }
    return {
      success: false,
      errors: { general: "Validation failed" },
    };
  }
}
