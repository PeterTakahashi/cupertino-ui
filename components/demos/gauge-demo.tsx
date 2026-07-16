import { Gauge } from "@/registry/cupertino-ui/gauge";

export default function GaugeDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-8">
      <div className="flex items-end gap-6">
        <Gauge value={72} label="Battery" tint="var(--system-green)" />
        <Gauge
          value={48}
          size={80}
          label="Move"
          currentValueLabel="480"
          tint="var(--system-red)"
        />
        <Gauge value={23} label="Storage" tint="var(--system-orange)" />
      </div>
      <Gauge
        variant="linear"
        value={64}
        tint="var(--system-blue)"
        label={
          <>
            <span>64 GB used</span>
            <span>128 GB</span>
          </>
        }
      />
    </div>
  );
}
