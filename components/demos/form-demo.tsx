"use client";

import { Form, FormRow, FormSection } from "@/registry/cupertino-ui/form";
import { Input } from "@/registry/cupertino-ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/cupertino-ui/select";
import { Switch } from "@/registry/cupertino-ui/switch";

export default function FormDemo() {
  return (
    <Form className="w-80" onSubmit={(e) => e.preventDefault()}>
      <FormSection header="Profile" footer="Your name appears on shared notes.">
        <FormRow label="Name" htmlFor="form-name">
          <Input
            id="form-name"
            placeholder="required"
            className="h-8 bg-transparent px-0 focus:ring-0"
          />
        </FormRow>
        <FormRow label="Visibility">
          <Select defaultValue="everyone">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="everyone">Everyone</SelectItem>
              <SelectItem value="contacts">Contacts Only</SelectItem>
              <SelectItem value="nobody">Nobody</SelectItem>
            </SelectContent>
          </Select>
        </FormRow>
        <FormRow label="Discoverable">
          <Switch defaultChecked className="scale-[0.85]" />
        </FormRow>
      </FormSection>
    </Form>
  );
}
