import Image from "next/image";
import devices from "../../static/cards";
import Device from "@/view/Device/Device";

interface DevicePageProps {
  params: { id: string };
}

export default function DevicePage({ params }: DevicePageProps) {
  const device = devices.find((item) => item.type === params.id);

  if (!device) return <div>Нет товара</div>;

  return (
    <div>
      <Device {...device}/>
    </div>
  );
}
