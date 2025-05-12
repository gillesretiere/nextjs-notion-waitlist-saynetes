import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-background p-6 text-muted-foreground md:justify-start text-xs text-zinc-700">
        
      <motion.div variants={itemVariants}>
        
        &copy; 2025 {" "}

        <Link
          href="https://hammer-marteau.com"
          rel="noopener noreferrer"
          target="_blank">
          <span className="text-zinc-700 transition-all duration-200 ease-linear hover:text-yellow-200">
            Hammer &amp; Marteau
          </span>
          &nbsp;
          <motion.img
            src="/logo_bw.svg"
            alt="logo"
            className="h-4 inline"
            variants={itemVariants}
          />
        </Link>

      </motion.div>
    </motion.div>
  );
}
