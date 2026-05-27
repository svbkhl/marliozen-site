import { cn } from "@/lib/utils"

interface OrganicShapeProps {
  variant?: 1 | 2 | 3 | 4
  color?: string
  className?: string
  size?: number
  opacity?: number
}

const paths = {
  1: "M60,5 C80,5 95,20 95,45 C95,70 80,90 55,92 C30,94 5,78 5,52 C5,26 40,5 60,5",
  2: "M50,3 C75,3 97,25 97,52 C97,79 75,97 50,97 C25,97 3,75 3,50 C3,25 25,3 50,3",
  3: "M58,4 C78,4 96,18 96,42 C96,68 80,92 56,94 C32,96 4,80 4,54 C4,28 38,4 58,4",
  4: "M52,2 C74,2 98,22 98,50 C98,78 74,98 52,98 C28,98 2,78 2,50 C2,24 28,2 52,2",
}

export default function OrganicShape({
  variant = 1,
  color = "#F5D5C0",
  className,
  size = 200,
  opacity = 0.6,
}: OrganicShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <path d={paths[variant]} fill={color} opacity={opacity} />
    </svg>
  )
}
