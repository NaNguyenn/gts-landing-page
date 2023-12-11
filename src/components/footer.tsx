import { companyInfoData } from "@/app/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <Image
              src="/gts-logo-primary.svg"
              alt="GTS Logo"
              className="dark:invert"
              width={165}
              height={62}
            />
            <p>Theo dõi chúng tôi qua:</p>
            <div>
              <Image
                src="/icons/social-facebook.svg"
                alt="Facebook Logo"
                className="dark:invert"
                width={10}
                height={16}
              />
              <Image
                src="/icons/social-youtube.svg"
                alt="Youtube Logo"
                className="dark:invert"
                width={18}
                height={16}
              />
              <Image
                src="/icons/social-twitter.svg"
                alt="Twitter Logo"
                className="dark:invert"
                width={16}
                height={16}
              />
              <Image
                src="/icons/social-linkedin.svg"
                alt="Linkedin Logo"
                className="dark:invert"
                width={14}
                height={16}
              />
            </div>
          </div>
          <div>
            <h2>{companyInfoData.fullname}</h2>
            <ul>
              <li>
                <span>Mã số thuế:</span>
                <span>{companyInfoData.taxCode}</span>
              </li>
              <li>
                <span>Văn phòng đại diện:</span>
                <span>{companyInfoData.address}</span>
              </li>
              <li>
                <span>Số điện thoại:</span>
                <span>{companyInfoData.phone}</span>
              </li>
              <li>
                <span>Email:</span>
                <span>{companyInfoData.email}</span>
              </li>
              <li>
                <span>Website:</span>
                <span>{companyInfoData.website}</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Copyright 2022 by GTS Vietnam</p>
          <nav className="">
            <ul className="">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
