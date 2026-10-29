
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  MoreHorizontal,
  Scissors,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locations = [
  "Cosmo Salon MM Alam",
  "Cosmo Salon PIA",
  "Cosmo Salon Iqbal Town",
  "Cosmo Salon DHA Phase 3",
];

const services = [
  { name: "Facial", duration: 45, price: 3000 },
  { name: "Threading", duration: 15, price: 500 },
  { name: "Shave", duration: 30, price: 1000 },
  { name: "Disposable Razor", duration: 15, price: 300 },
  { name: "Beard Color Application", duration: 30, price: 1500 },
  { name: "Charcoal Black Mask", duration: 30, price: 1800 },
  { name: "Arm Polisher", duration: 15, price: 1000 },
  { name: "Nose Strip", duration: 15, price: 300 },
  { name: "Manicure", duration: 15, price: 1200 },
  { name: "Pedicure", duration: 15, price: 1800 },
  { name: "Body Trimmer", duration: 15, price: 1000 },
  { name: "Make over", duration: 30, price: 3000 },
  { name: "Makeup", duration: 60, price: 5000 },
  { name: "Hair cut", duration: 30, price: 1500 },
  { name: "Head Wash", duration: 15, price: 500 },
  { name: "Hair Mask", duration: 30, price: 2000 },
  { name: "Styling", duration: 15, price: 1000 },
  { name: "Premium Styling", duration: 30, price: 2000 },
];

const employees = [
  { name: "Any available professional", value: "Any", price: 0 },
  { name: "Obaid", value: "Obaid", price: 3000 },
  { name: "Ali", value: "Ali", price: 3000 },
];

const times = [
  "1:00 pm",
  "1:45 pm",
  "2:30 pm",
  "3:15 pm",
  "4:00 pm",
  "4:45 pm",
  "5:30 pm",
  "6:15 pm",
  "7:00 pm",
  "7:45 pm",
  "8:30 pm",
  "9:15 pm",
  "10:00 pm",
];

const formatMoney = (amount: number) =>
  `Rs. ${amount.toLocaleString("en-PK")}`;

const formatDate = (date?: Date) =>
  date
    ? date.toLocaleDateString("en-PK", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Choose date";

export default function AppointmentSection() {
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [service, setService] = useState("");
  const [employee, setEmployee] = useState("Any");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("local");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const selectedService = services.find((item) => item.name === service);
  const selectedEmployee = employees.find((item) => item.value === employee);

  const total = selectedService?.price ?? 0;

  const stepTitles = [
    "Your service",
    "Choose a time",
    "Your details",
    "Review & book",
  ];

  function next() {
    setError("");

    if (step === 0) {
      if (!location || !gender || !service || !date) {
        setError("Please select your location, service, gender and date.");
        return;
      }
    }

    if (step === 1 && !time) {
      setError("Please choose an appointment time.");
      return;
    }

    if (step === 2) {
      if (!name.trim() || !phone.trim() || !email.trim()) {
        setError("Please complete your name, phone and email.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
    }

    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }

    // Demo only: connect your booking API before accepting real bookings.
    console.log({
      location,
      gender,
      service,
      employee,
      date: date?.toISOString(),
      time,
      name,
      phone,
      email,
      payment,
      total,
    });

    setConfirmed(true);
  }

  function resetBooking() {
    setStep(0);
    setLocation("");
    setGender("");
    setService("");
    setEmployee("Any");
    setDate(undefined);
    setTime("");
    setName("");
    setPhone("");
    setEmail("");
    setPayment("local");
    setError("");
    setConfirmed(false);
  }

  return (
    <section
      id="appointment"
      className="bg-[#f7f6f3] px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center sm:mb-10">
          <Badge
            variant="outline"
            className="mb-3 rounded-full border-black/10 bg-white/70 px-4 py-1 text-[10px] font-normal uppercase tracking-[0.2em] text-neutral-500"
          >
            COSMO Salon · Lahore
          </Badge>

          <h2 className="text-3xl font-medium tracking-[-0.06em] text-[#242321] sm:text-5xl">
            Your moment, beautifully.
          </h2>

          <p className="mt-3 text-sm text-neutral-500 sm:text-base">
            Book your next salon experience.
          </p>
        </header>

        <div className="relative isolate overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#24201d] shadow-[0_25px_80px_-35px_rgba(0,0,0,0.3)] sm:rounded-[32px]">
          {/* Swap this URL for /images/cosmo-bride.jpg when you have your image. */}
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=2200&q=85')",
            }}
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/55 to-black/15" />

          <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[0.8fr_1fr] lg:gap-12 lg:p-12">
            <div className="max-w-md py-2 text-white sm:py-8">
              <p className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
                <span className="h-px w-7 bg-white/60" />
                COSMO Salon
              </p>

              <h3 className="max-w-sm text-4xl font-medium leading-[1.08] tracking-[-0.06em] sm:text-6xl">
                A little time.
                <br />
                Just for you.
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-6 text-white/75">
                Thoughtful care, expert hands, and a moment to feel your best.
              </p>

              <div className="mt-8 hidden items-center gap-3 text-xs text-white/75 sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur">
                  <MapPin className="h-4 w-4" />
                </div>
                Four locations in Lahore
              </div>
            </div>

            <div className="rounded-[24px] border border-white/60 bg-white/95 p-5 shadow-2xl shadow-black/15 backdrop-blur-xl sm:p-7 flex flex-col justify-between min-h-[520px]">
              {confirmed ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[440px] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <Check className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-medium tracking-tight">
                    Details received
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                    This is a demo confirmation. Your appointment has not been
                    sent to COSMO Salon yet.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-6 rounded-xl"
                    onClick={resetBooking}
                  >
                    Book another appointment
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                        Book an appointment
                      </p>

                      <h3 className="mt-1 text-xl font-medium tracking-tight">
                        {stepTitles[step]}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#f3f2ef] px-3 py-1.5 text-xs text-neutral-500">
                        {step + 1} / 4
                      </span>

                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100"
                          aria-label="Booking options"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => {
                              setStep(0);
                              setError("");
                            }}
                          >
                            Edit service
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            onClick={() => {
                              setStep(1);
                              setError("");
                            }}
                          >
                            Change appointment time
                          </DropdownMenuItem>

                          <DropdownMenuItem onClick={resetBooking}>
                            Start over
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-1.5">
                    {[0, 1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          index <= step ? "bg-[#292825]" : "bg-neutral-200"
                        }`}
                      />
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="mt-5 h-[340px] overflow-y-auto pr-0.5"
                    >
                      {step === 0 && (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <Label>Salon location</Label>

                            <Select
                              value={location}
                              onValueChange={(value) =>
                                setLocation(value ?? "")
                              }
                            >
                              <SelectTrigger className="h-11 rounded-xl border-neutral-200">
                                <SelectValue placeholder="Choose a location" />
                              </SelectTrigger>

                              <SelectContent>
                                {locations.map((item) => (
                                  <SelectItem key={item} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                              <Label>Gender</Label>

                              <Select
                                value={gender}
                                onValueChange={(value) =>
                                  setGender(value ?? "")
                                }
                              >
                                <SelectTrigger className="h-11 rounded-xl border-neutral-200">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>

                                <SelectContent>
                                  <SelectItem value="Men">Men</SelectItem>
                                  <SelectItem value="Women">Women</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-1.5">
                              <Label>Professional</Label>

                              <Select
                                value={employee}
                                onValueChange={(value) =>
                                  setEmployee(value ?? "Any")
                                }
                              >
                                <SelectTrigger className="h-11 rounded-xl border-neutral-200">
                                  <SelectValue />
                                </SelectTrigger>

                                <SelectContent>
                                  {employees.map((item) => (
                                    <SelectItem
                                      key={item.value}
                                      value={item.value}
                                    >
                                      {item.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <Label>Service</Label>

                            <Select
                              value={service}
                              onValueChange={(value) => setService(value ?? "")}
                            >
                              <SelectTrigger className="h-11 rounded-xl border-neutral-200">
                                <SelectValue placeholder="What would you like?" />
                              </SelectTrigger>

                              <SelectContent className="max-h-64">
                                {services.map((item) => (
                                  <SelectItem
                                    key={item.name}
                                    value={item.name}
                                  >
                                    {item.name} · {item.duration} min
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-1.5">
                            <Label>Date</Label>

                            <Popover>
                              <PopoverTrigger className="flex h-11 w-full items-center justify-start gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-left text-sm font-normal hover:bg-neutral-50">
                                <CalendarDays className="h-4 w-4 text-neutral-400" />
                                <span className={date ? "text-neutral-900" : "text-neutral-500"}>
                                  {formatDate(date)}
                                </span>
                                <ChevronDown className="ml-auto h-4 w-4 text-neutral-400" />
                              </PopoverTrigger>

                              <PopoverContent align="start" className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={(value) => setDate(value)}
                                  disabled={(day) => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    return day < today;
                                  }}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      )}

                      {step === 1 && (
                        <div>
                          <div className="mb-4 rounded-xl bg-[#f6f5f2] p-3.5">
                            <div className="flex items-center gap-2 text-sm font-medium">
                              <Scissors className="h-4 w-4 text-neutral-500" />
                              {service}
                            </div>

                            <p className="mt-1 text-xs text-neutral-500">
                              {formatDate(date)} · {selectedService?.duration} minutes
                            </p>
                          </div>

                          <Label className="mb-3 block">
                            Available times
                          </Label>

                          <RadioGroup
                            value={time}
                            onValueChange={(value) => setTime(value ?? "")}
                            className="grid grid-cols-3 sm:grid-cols-4 gap-2"
                          >
                            {times.map((item) => (
                              <div key={item}>
                                <RadioGroupItem
                                  id={`slot-${item}`}
                                  value={item}
                                  className="peer sr-only"
                                />

                                <Label
                                  htmlFor={`slot-${item}`}
                                  className={`flex cursor-pointer items-center justify-center rounded-xl border px-1.5 py-2.5 text-xs transition-colors ${
                                    time === item
                                      ? "border-neutral-900 bg-neutral-900 text-white"
                                      : "border-neutral-200 hover:border-neutral-400"
                                  }`}
                                >
                                  {item}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>

                          <p className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
                            <Clock3 className="h-3.5 w-3.5" />
                            Sample slots — live availability is not connected.
                          </p>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="booking-name">Full name</Label>
                            <Input
                              id="booking-name"
                              autoComplete="name"
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                              placeholder="Your name"
                              className="h-11 rounded-xl"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="booking-phone">Phone number</Label>

                            <div className="flex gap-2">
                              <div className="flex h-11 shrink-0 items-center rounded-xl border bg-[#f7f6f3] px-3 text-sm">
                                +92
                              </div>

                              <Input
                                id="booking-phone"
                                type="tel"
                                autoComplete="tel-national"
                                value={phone}
                                onChange={(event) =>
                                  setPhone(event.target.value)
                                }
                                placeholder="3XX XXXXXXX"
                                className="h-11 rounded-xl"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="booking-email">Email address</Label>

                            <Input
                              id="booking-email"
                              type="email"
                              autoComplete="email"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              placeholder="you@example.com"
                              className="h-11 rounded-xl"
                            />
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-4">
                          <div className="rounded-2xl bg-[#f6f5f2] p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="font-medium">{service}</p>

                                <p className="mt-1 text-xs text-neutral-500">
                                  {location}
                                </p>

                                <p className="mt-1 text-xs text-neutral-500">
                                  {formatDate(date)} · {time}
                                </p>

                                <p className="mt-1 text-xs text-neutral-500">
                                  {employee === "Any" ? "Any professional" : employee} · {gender}
                                </p>

                                <p className="mt-1 break-words text-xs text-neutral-500">
                                  {name} · {phone}
                                </p>

                                <p className="mt-1 break-all text-xs text-neutral-500">
                                  {email}
                                </p>
                              </div>

                              <Button
                                variant="ghost"
                                size="sm"
                                className="shrink-0"
                                onClick={() => {
                                  setStep(0);
                                  setError("");
                                }}
                              >
                                Edit
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-neutral-500">
                              Estimated total
                            </span>

                            <span className="text-lg font-semibold">
                              {formatMoney(total)}
                            </span>
                          </div>

                          <div className="rounded-xl border p-3.5">
                            <RadioGroup
                              value={payment}
                              onValueChange={(value) => setPayment(value ?? "local")}
                            >
                              <div className="flex items-center gap-3">
                                <RadioGroupItem
                                  value="local"
                                  id="pay-local"
                                />

                                <Label
                                  htmlFor="pay-local"
                                  className="cursor-pointer"
                                >
                                  <span className="block text-sm font-medium">
                                    I will pay locally
                                  </span>

                                  <span className="mt-1 block text-xs font-normal text-neutral-500">
                                    Pay at the salon.
                                  </span>
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <p className="text-xs leading-5 text-neutral-400">
                            Prices are sample values. Confirm actual service
                            pricing with COSMO Salon.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="h-5 my-1 flex items-center">
                    {error && (
                      <p role="alert" className="text-xs font-medium text-red-600">
                        {error}
                      </p>
                    )}
                  </div>

                  <div className="mt-auto flex items-center gap-3 border-t border-neutral-100 pt-4">
                    {step > 0 ? (
                      <Button
                        variant="ghost"
                        className="h-11 rounded-xl px-3"
                        onClick={() => {
                          setError("");
                          setStep((current) => current - 1);
                        }}
                      >
                        <ArrowLeft className="mr-1.5 h-4 w-4" />
                        Back
                      </Button>
                    ) : (
                      <span className="text-xs text-neutral-400">
                        Your time, your way.
                      </span>
                    )}

                    <Button
                      className="ml-auto h-11 rounded-xl bg-[#242321] px-5 text-white hover:bg-black"
                      onClick={next}
                    >
                      {step === 3 ? "Confirm booking" : "Continue"}

                      {step === 3 ? (
                        <Check className="ml-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-neutral-400">
          COSMO Salon · Thoughtful beauty, personal care.
        </p>
      </div>
    </section>
  );
}
