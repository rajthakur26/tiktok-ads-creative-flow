
# TikTok Ads Creative Flow – Tailwind UI



## Run
npm install
npm run dev

## Live Demo
https://rajthakur26-tiktok-ads-creative-flo.vercel.app


🔐 OAuth Setup Steps (Mocked)
OAuth Integration Overview

This project simulates the TikTok Ads OAuth Authorization Code flow on the frontend.

Due to TikTok Ads API restrictions (geo, app approval, and account requirements), the OAuth flow is mocked, but the implementation mirrors real-world behavior.

OAuth Flow (Simulated)
Step 1: User clicks “Connect TikTok Ads”

The app simulates redirecting the user to TikTok’s OAuth authorization page.

Step 2: Authorization Success

A mock access_token is generated.

The token is stored securely in localStorage.

Step 3: Protected Actions

Ad submission is blocked if the access token is missing.

This mimics real OAuth-protected API behavior.

How Real OAuth Would Work (Production)

In a production environment, the flow would be:

Redirect user to TikTok OAuth URL with:

client_id

redirect_uri

required scopes

Receive authorization code on callback

Exchange code for access_token

Store token securely

Attach token to Ads API requests

⚠️ Assumptions & Shortcuts Taken

The following assumptions and shortcuts were intentionally made due to time and platform constraints:

1️⃣ OAuth & API Calls Are Mocked

TikTok Ads APIs are geo-restricted and require approved developer accounts.

OAuth token generation and API validation are simulated.

Validation logic matches real-world behavior.

2️⃣ No Backend Service

All logic is handled on the frontend as per assignment instructions.

No server-side token exchange or secure storage is implemented.

3️⃣ Simplified Music Validation

A static valid music ID (VALID_MUSIC) is used to simulate API validation.

Invalid IDs trigger user-friendly error messages.

4️⃣ UI Over Visual Polish

UI is intentionally clean and minimal.

Priority was given to:

Validation logic

Error handling

Conditional flows

Styling is done using Tailwind CSS without heavy design systems.

5️⃣ Error Handling Focus

Raw API error responses are not exposed.

Errors are displayed in a human-readable and actionable format.

✅ Why This Approach

This approach demonstrates:

Real-world frontend decision-making

Proper handling of constraints

Focus on correctness and UX over completeness



This project focuses on demonstrating frontend reasoning, validation, and error handling under real-world constraints rather than full production integration.