import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from 'next-intl'

export default function Footer() {
	const t = useTranslations('footer')
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("exclusive")}</h3>
            <div className="space-y-4">
              <p className="font-medium">{t("subscribe")}</p>
              <p className="text-sm">{t("discount")}</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="bg-transparent border border-white/30 rounded-none px-4 py-2 text-sm w-full"
                />
                <button className="bg-transparent border border-white/30 border-l-0 px-3">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("support")}</h3>
            <div className="space-y-4 text-sm">
              <p>{t("address1")}</p>
              <p>{t("address2")}</p>
              <p>{t("email")}</p>
              <p>{t("phone")}</p>
            </div>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("account")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:underline">
					 {t("myAccount")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t("cart")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t("wishlist")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
					 {t("shop")}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("quickLink")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:underline">
					 {t("privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
					 {t("terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
					 {t("faq")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
					 {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("social")}</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-xs text-gray-400">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
