<?php

declare(strict_types=1);

namespace App\Dto;

use DateTimeImmutable;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\Positive;

final class ReservationInputDto
{
    #[NotNull]
    public ?string $arrivalDepartureDates = null;

    #[NotNull, Positive]
    public ?int $guests = null;

    #[NotNull]
    public ?string $reservationName = null;
}