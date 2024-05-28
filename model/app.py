from src import index
import sys

args = sys.argv[1:]

# DEBUG
args = ["/app/out/output.wav"]
print(args)

index.run(args)
