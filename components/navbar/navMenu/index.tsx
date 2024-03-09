import { useRouter } from "next/navigation";
import { ChevronsUpDown, Plus, Hotel, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NavMenu = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => router.push("/hotel/new")}
        >
          <Plus size={15} />
          <span>Add Hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => router.push("/my-hotels")}
        >
          <Hotel size={15} />
          <span>my hotels</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => router.push("/my-bookings")}
        >
          <BookOpenCheck size={15} />
          <span>my bookings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
