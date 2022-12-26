## Next.js 12 Clean Architecture

This repo provides simple CRUD application based on Clean Architecture structure.

To try it out, prepare your firebase project and .env file;

### Some Preps

1. Add web app to your firebase project and Create firestore database with `user` collection.
2. Copy your firebase config and paste it your .env file.

It's going to be like following. (You need to add prefix `NEXT_PUBLIC` to use firebase library on client side.)

```
## Firebase Setting
NEXT_PUBLIC_FIREBASE_API_KEY="your api key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your auth domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your firebase project id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your firebase storage bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your firebase messaging sender id"
NEXT_PUBLIC_FIREBASE_APP_ID="your firebase app id"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="your firebase measurement id"
```

Now you're good to go. Just run the local sever;

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```
src/
├─ application/usecases/
├─ config/
├─ di/
├─ pages/
│  ├─ api/
│  ├─ _app.tsx
│  ├─ index.tsx
├─ presentation/
│  ├─ components/
│  │  ├─ atoms/
│  │  ├─ molecules/
│  │  ├─ organisms/
│  │  ├─ pages/
│  ├─ controllers/
│  ├─ states/
│  │  ├─ atoms/
│  │  ├─ selectors/
├─ styles/
├─ domain/
│  ├─ entities/
│  ├─ repositories/
│  ├─ usecases/
│  ├─ values/
├─ infrastructure/
│  ├─ datastore/
│  │  ├─ database/firestore/
│  │  ├─ api/
├─ core/
│  ├─ error/
```
