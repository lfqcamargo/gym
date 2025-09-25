import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/Input";

type Props = {
  control: Control<any>;
  name?: string;
};

export function TimePickerField({ control, name }: Props) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <Controller
      control={control}
      name={name ? name : "time"}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Input
              placeholder="HH:MM"
              value={value}
              editable={false}
              error={error?.message}
            />
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={value ? new Date(`1970-01-01T${value}:00`) : new Date()}
              mode="time"
              is24Hour={true}
              display="spinner"
              onChange={(event, selectedDate) => {
                setShowPicker(false);
                if (event.type === "set" && selectedDate) {
                  // usuário confirmou
                  const hours = String(selectedDate.getHours()).padStart(
                    2,
                    "0"
                  );
                  const minutes = String(selectedDate.getMinutes()).padStart(
                    2,
                    "0"
                  );
                  onChange(`${hours}:${minutes}`);
                }
              }}
            />
          )}
        </View>
      )}
    />
  );
}
