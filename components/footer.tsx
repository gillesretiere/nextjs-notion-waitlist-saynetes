import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-background p-6 text-muted-foreground md:justify-start">
        
      <motion.div variants={itemVariants}>
        
        Conception et réalisation du site par {" "}

        <Link
          href="https://lakshb.dev"
          rel="noopener noreferrer"
          target="_blank">
          <span className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
            Hammer & Marteau
          </span>
          .
          <motion.img
            src="/logo_hmrt_red.png"
            alt="logo"
            className="h-6 inline"
            variants={itemVariants}
          />
        </Link>

      </motion.div>
    </motion.div>
  );
}
