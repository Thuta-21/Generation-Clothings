import { Group, Input, FormInputLabel } from "./form-input.style.js";
import { InputHTMLAttributes, FC } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherPros }) => {
  return (
    <Group>
      <Input {...otherPros} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherPros.value &&
              typeof otherPros.value === "string" &&
              otherPros.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
      {/* shrink က html native arrtribute မို့လို့ $ခံထားတာ။ styled-component ဆီ props ပေးတော့မယ်ဆိုရင် $ ခံတာအကောင်းဆုံး  */}
    </Group>
  );
};

export default FormInput;
