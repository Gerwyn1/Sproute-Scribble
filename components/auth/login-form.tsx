"use client";

import AuthCard from "./auth-card";

export default function LoginForm() {
  return (
    <AuthCard
      cardTitle="Welcome back!"
      backButtonHref="/auth/register"
      backButtonLabel="Create a new account"
      showSocials
    >
      <div>
        <h1>hey</h1>
      </div>
    </AuthCard>
  );
}
