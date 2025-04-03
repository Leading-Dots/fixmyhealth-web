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
import { motion } from "framer-motion";
import { useState } from "react";

type UserRole = "patient" | "doctor";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("patient");

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginValues) {    
    try {
      await signIn(values.email, values.password, role);
      showToast("Login successful!", "success");
    } catch (error: any) {
      showToast(error.message, "error");
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-[900px] h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{role === "patient" ? "Patient" : "Doctor"} Login</h2>
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
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg">
                {form.formState.isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </motion.div>
            </form>
          </Form>
          <div className="mt-4 text-center">
            <button onClick={() => setRole(role === "patient" ? "doctor" : "patient")} className="text-primary hover:underline">
              Login as {role === "patient" ? "Doctor" : "Patient"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/home" className="text-primary hover:underline">
              Continue without signing in
            </Link>
          </div>
        </div>
        
        {/* Right Side - Welcome Message */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-cover bg-center text-white p-8" style={{ backgroundImage: "url('/images/icons/login/loginbg.jpg')" }}>
          <h2 className="text-2xl font-bold mb-2">Welcome to Login</h2>
          <p className="mb-4">Don't have an account?</p>
          <Link to="/signup" className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-pink-500 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}