# KITCARE-web

colin

## Contact form email

The contact form posts to `POST /api/contact`. The API route sends the enquiry
through Resend, which can be installed from the Vercel Marketplace.

Required Vercel environment variable:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
```

Optional environment variables:

```bash
CONTACT_TO_EMAIL=Kityee3_12au@yahoo.com
CONTACT_FROM_EMAIL="KIT Care <onboarding@resend.dev>"
```

For production, verify the sending domain in Resend and change
`CONTACT_FROM_EMAIL` to an address on that verified domain. After changing
environment variables in Vercel, redeploy so the serverless function can read
the new values.
