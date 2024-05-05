import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          {/* <div
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          /> */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
          {/* 两个 <Image> 标签中，className 部分的配置用于控制不同屏幕尺寸下图片的显示方式，这通常在响应式网页设计中非常有用。
          这里使用的是 Tailwind CSS 的类名来实现响应式布局。我将分别解释每个类名的作用：

          第一个图片（桌面版）:
          className="hidden md:block"
          hidden: 这个类在所有屏幕尺寸下默认将元素设置为隐藏。
          md:block: 这个类指定在中等屏幕（md，即medium devices，通常是768px及以上宽度的屏幕）及更大尺寸的屏幕上，元素应该显示为块级元素（block），
          覆盖之前的 hidden 设置。因此，这个图片在桌面和较大屏幕上可见，而在小屏幕设备上不显示。
          第二个图片（移动版）:
          className="block md:hidden"
          block: 这个类使元素在所有屏幕尺寸下默认显示为块级元素。
          md:hidden: 这个类指定在中等屏幕及以上尺寸的屏幕上，元素应该隐藏。因此，这个图片在小屏幕设备上显示，而在桌面和较大屏幕上不显示。
          总结来说，这两个配置使得在小屏幕（手机等）设备上显示 hero-mobile.png 图片，而在中等及更大屏幕（如平板电脑和桌面电脑）上显示 hero-desktop.png 图片。
          这种方法优化了不同设备上的用户视觉体验，保证了界面的整洁与专业。 */}
        </div>
      </div>
    </main>
  );
}
