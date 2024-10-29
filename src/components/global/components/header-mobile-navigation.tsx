import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, getBaseUrl } from "@lib/utils";
import { Button } from "@components/ui/button";
import { NAVIGATIONS } from "@constants";
const url = getBaseUrl();
interface Props {
  className?: string;
}
const MobileNavigation = ({ className }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("", className)}>
        <Button variant="ghost" className="py-0 text-lg">
          Navigation
          <span className="sr-only">Navigation Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {NAVIGATIONS.map(({ href, label }) => (
          <DropdownMenuItem
            key={href}
          >
            <a href={`${url}/${href}`}>{label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavigation;
