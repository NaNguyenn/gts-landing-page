import { companyInfoData } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-14 mx-auto max-w-7xl grid gap-y-7 lg:grid-cols-2 lg:divide-y">
      <div>
        <Image
          src="/gts-logo-primary.svg"
          alt="GTS Logo"
          className="mb-20"
          width={165}
          height={62}
        />
        <p className="mb-5 font-semibold">Theo dõi chúng tôi qua:</p>
        <div className="flex items-center gap-4">
          <Image
            src="/icons/social-facebook.svg"
            alt="Facebook Logo"
            width={10}
            height={16}
          />
          <Image
            src="/icons/social-youtube.svg"
            alt="Youtube Logo"
            width={18}
            height={16}
          />
          <Image
            src="/icons/social-twitter.svg"
            alt="Twitter Logo"
            width={16}
            height={16}
          />
          <Image
            src="/icons/social-linkedin.svg"
            alt="Linkedin Logo"
            width={14}
            height={16}
          />
        </div>
      </div>
      <div className="border-none">
        <h2 className="mb-7 font-bold text-2xl text-primary uppercase">
          {companyInfoData.fullname}
        </h2>
        <ul className="font-medium flex flex-col gap-3">
          <li>
            <span className="font-semibold">Mã số thuế: </span>
            <span>{companyInfoData.taxCode}</span>
          </li>
          <li>
            <span className="font-semibold">Văn phòng đại diện: </span>
            <span>{companyInfoData.address}</span>
          </li>
          <li>
            <span className="font-semibold">Số điện thoại: </span>
            <span>{companyInfoData.phone}</span>
          </li>
          <li>
            <span className="font-semibold">Email: </span>
            <span>{companyInfoData.email}</span>
          </li>
          <li>
            <span className="font-semibold">Website: </span>
            <span>{companyInfoData.website}</span>
          </li>
        </ul>
      </div>
      <p className="lg:py-7 flex items-center text-sm opacity-50">
        Copyright 2022 by GTS Vietnam
      </p>
      <nav>
        <ul className="lg:py-7 font-medium flex flex-wrap items-center gap-x-10 gap-y-4">
          <li>
            <Link href="/home">Trang chủ</Link>
          </li>
          <li>
            <Link href="/home">Giới thiệu</Link>
          </li>
          <li>
            <Link href="/home">Dịch vụ</Link>
          </li>
          <li>
            <Link href="/home">Sản phẩm</Link>
          </li>
          <li>
            <Link href="/home">Các dự án</Link>
          </li>
          <li>
            <Link href="/home">Liên hệ</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
