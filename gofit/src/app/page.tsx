// src/app/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">
          GoFitへようこそ！
        </h1>
      </div>

      <div className="relative flex place-items-center">
        {/* GoFitのロゴやアイコンを配置 */}
        <Image
          className="relative"
          src="/gofit-logo.svg"
          alt="GoFit Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mt-8 flex gap-4">
        {/* ログインボタン */}
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ログイン
        </Link>
        {/* 新規登録ボタン */}
        <Link
          href="/signup"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          新規登録
        </Link>
      </div>
    </main>
  );
}