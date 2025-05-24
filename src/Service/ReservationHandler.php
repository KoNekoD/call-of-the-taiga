<?php

declare(strict_types=1);

namespace App\Service;

use App\Dto\ReservationInputDto;
use App\Entity\Reservation;
use AutoMapper\AutoMapperInterface;
use Doctrine\ORM\EntityManagerInterface;

final readonly class ReservationHandler
{
    public function __construct(private AutoMapperInterface $mapper, private EntityManagerInterface $entityManager) {}

    public function reserve(ReservationInputDto $dto): void
    {
        $entity = $this->mapper->map($dto, Reservation::class);

        $this->entityManager->persist($entity);
        $this->entityManager->flush();
    }
}