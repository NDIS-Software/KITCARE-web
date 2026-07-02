import Image from "next/image";

export function NdisMarkPlaceholder() {
  return (
    <div className="flex min-h-24 items-center justify-center px-2 py-3">
      <Image
        src="/images/brand/ndis-registered-provider.png"
        alt="Registered NDIS Provider"
        width={1582}
        height={837}
        className="h-auto w-full max-w-[180px]"
      />
    </div>
  );
}
