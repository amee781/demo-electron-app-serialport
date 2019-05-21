String localsate = "off";

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}
void loop() {
  if (Serial.available() > 0) {
    
    char state = Serial.read();
    if (state == 'H' || state == 'h') {
      digitalWrite(LED_BUILTIN, HIGH);
      Serial.println("LED ON");
       localsate = "on";
    }
    if (state == 'L' || state == 'l') {
      digitalWrite(LED_BUILTIN, LOW);
      Serial.println("LED OFF");
       localsate = "off";
    }
    if (state == 's' || state == 'S' ){
      Serial.println(localsate);
    }    
  }
  delay(50);
}
