"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./billboard/columns";
import { DataTable } from "./billboard/data-table";
import ApiList from "./ui/api-list";

interface BillboardClientProps {
  data: BillboardColumn[];
}

function BillboardClient({ data }: BillboardClientProps) {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Maneja los Billboards de tu tienda"
        />
        <Button
          onClick={() => router.push(`/${params.storeID}/billboards/new`)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
      <Heading
        title="API"
        description="API para obtener los datos de los billboards"
      />
      <Separator />
      <ApiList entityIdName="billboardID" entityName="billboards"/>
    </>
  );
}

export default BillboardClient;
