import statistics
from dataclasses import dataclass, field
from typing import List, Dict, Union


@dataclass
class Wine:
    _name: str
    _type: str
    _winery: str
    _appellation: str
    _vintage: int
    _ratings: List[int]
    _average_rating: int = field(init=False)
    _price: float

    @property
    def average_rating(self):
        return self._average_rating

    @property
    def price(self):
        return self._price

    def __post_init__(self):
        self._average_rating = self._get_average_rating()

    def get_data(self) -> Dict:
        return {
            "name": self._name,
            "type": self._type,
            "winery": self._winery,
            "appellation": self._appellation,
            "vintage": self._vintage,
            "ratings": self._ratings.copy(),
            "average_rating": self._average_rating,
            "price": self._price,
        }

    @classmethod
    def create_from_data(cls, data: Dict):
        return cls(
            _name=data["name"],
            _type=data["type"],
            _winery=data["winery"],
            _appellation=data["appellation"],
            _vintage=data["vintage"],
            _ratings=data["ratings"],
            _price=data["price"],
        )

    def _get_average_rating(self) -> Union[int, None]:
        try:
            # Let's suppose we always want to round to the nearest integer
            return self._get_nearest_integer(statistics.mean(self._ratings))
        except statistics.StatisticsError:
            return None

    # TODO jlm: should be in a dedicated MathService
    def _get_nearest_integer(cls, number) -> int:
        # Can't use round() as it's rounding half to even
        # (2.5 => 2, 3.5 => 4, 4.5 => 4 for example)
        # whereas we want x.5 to always be rounded to the higher nearest integer
        # (2.5 => 3, 3.5 => 4, 4.5 => 5 for example)
        return int(number + 0.5)
