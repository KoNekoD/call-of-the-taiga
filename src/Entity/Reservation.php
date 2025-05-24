<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\ReservationRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
class Reservation
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private string $arrivalDepartureDates;

    #[ORM\Column]
    private int $guests;

    #[ORM\Column]
    private string $reservationName;

    public function getId(): int
    {
        return (int)$this->id;
    }

    public function getArrivalDepartureDates(): string
    {
        return $this->arrivalDepartureDates;
    }

    public function setArrivalDepartureDates(string $arrivalDepartureDates): void
    {
        $this->arrivalDepartureDates = $arrivalDepartureDates;
    }

    public function getGuests(): int
    {
        return $this->guests;
    }

    public function setGuests(int $guests): void
    {
        $this->guests = $guests;
    }

    public function getReservationName(): string
    {
        return $this->reservationName;
    }

    public function setReservationName(string $reservationName): void
    {
        $this->reservationName = $reservationName;
    }
}