import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "@/lib/toast";
import { useState } from "react";

type UserRole = "patient" | "doctor";

const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    role: z.enum(["patient", "doctor"] as const),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("patient");

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      role: "patient",
    },
  });

  async function onSubmit(values: SignUpValues) {
    try {
     const response = await signUp(values.email, values.password, values.role);
     console.log("response from signup", response);
      navigate("/confirm-signup", {
        state: {
          email: values.email,
          role: values.role,
          userId: response!.userId,
        },
      });
    } catch (error: any) {
      showToast(error.message, "error");
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-[900px] h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Signup Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create an Account - {role === "patient" ? "Patient" : "Doctor"}</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg">
                {form.formState.isSubmitting ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center">
            <button onClick={() => setRole(role === "patient" ? "doctor" : "patient")} className="text-primary hover:underline">
              Sign up as {role === "patient" ? "Doctor" : "Patient"}
            </button>
          </div>
        </div>
        
        {/* Right Side - Login Message */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-cover bg-center text-white p-8" style={{ backgroundImage: "url('/images/icons/login/loginbg.jpg')" }}>
          <h2 className="text-2xl font-bold mb-2">Already have an account?</h2>
          <p className="mb-4">Login to access your account.</p>
          <Link to="/login" className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-pink-500 transition">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}